import {MercadoPagoConfig, Payment, Preference} from 'mercadopago'

export const createDonation = async(req, res) => {
    
    const client = new MercadoPagoConfig({
        accessToken: 'TEST-2269610763553663-012416-74611a1b8dfe808e1713d573b6bdb3ea-1651477105',
        options: {
            timeout: 10000,
        }
    })

    const preference = new Preference(client)

    try {
        const response = await preference.create({
            body: {
              items: [
                {
                  title: 'Donación',
                  quantity: 1,
                  currency_id: 'ARS',
                  unit_price: 1000
                }
              ],
              back_urls: {
                success: 'http://localhost:5000/success',
                pending: 'http://localhost:5000/pending',
                failure: 'http://localhost:5000/failure'
              },
              notification_url: 'http://localhost:5000/webhook',
            }
          })
          console.log(response);
          res.send(response.body);
    } catch (error) {
        console.log(error)
    }
}

export const receiveWebhook = (req, res) => {
    console.log(req.query);
    res.send('webhook received')
}