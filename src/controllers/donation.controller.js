import { MercadoPagoConfig, Payment, Preference } from "mercadopago";

export const createDonation = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-2269610763553663-012416-74611a1b8dfe808e1713d573b6bdb3ea-1651477105",
  });

  try {
    const body = {
      items: [
        {
          title: 'Donación a Por Ellos Ezeiza',
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "http://localhost:5000/success",
        pending: "http://localhost:5000/pending",
        failure: "http://localhost:5000/failure",
      },
      notification_url: "https://3260-2800-810-50d-8632-554d-9aec-7e79-ab69.ngrok-free.app/webhook",
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({body});
    
    res.json({
      url:result.init_point
    })
  } catch (error) {
    console.log('Error en el catch:', error);
    res.status(501).json({
      message: "Error al crear la preferencia",
    });
  }
};

export const receiveWebhook = (req, res) => {
  console.log(req.query);
  res.send("webhook received");
};
