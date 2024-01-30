import { MercadoPagoConfig, Payment, Preference } from "mercadopago";

export const createDonation = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-7313224845884334-012219-5efbfd9b36d05a9ae6782bfc426e2421-52184901",
  });

  

  try {
    const body = {
      items: [
        {
          title: req.body.title,
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
      notification_url: "https://pawsofhope.4.us-1.fl0.io/webhook",
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({body});
    
    res.json({
      id:result.id,
      
    })
    // res.redirect(result.sandbox_init_point);
  } catch (error) {
    console.log('Error en el catch:', error);
    res.status(500).json({
      message: "Error al crear la preferencia",
    });
  }
};

export const receiveWebhook = (req, res) => {
  console.log(req);
  res.send("webhook received");
};
