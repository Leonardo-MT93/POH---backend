import {MercadoPagoConfig, Payment, Preference} from 'mercadopago'

export const createDonation = async(req, res) => {
    
    const client = new MercadoPagoConfig({
        accessToken: 'TEST-2269610763553663-012416-74611a1b8dfe808e1713d573b6bdb3ea-1651477105',
        options: {
            timeout: 10000,
        }
    })

    const preference = new Preference(client)

    preference.create({
        body: {
          items: [
            {
              title: 'Donación',
              quantity: 1,
              unit_price: 1000
            }
          ],
        }
      })
      .then(console.log)
      .catch(console.log);

    res.send('creating donation')

}