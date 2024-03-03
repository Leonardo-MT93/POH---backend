import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import dotenv from "dotenv";
dotenv.config();
export const createDonation = async (req, res) => {

  const personalToken = process.env.ACCESS_TOKEN;
  const client = new MercadoPagoConfig({
    accessToken:
      personalToken,
  });

  try {
    const body = {
      items: [
        {
          title: 'Donación a Por Ellos Ezeiza',
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          description: 'Donación realizada para la organización Por Ellos Ezeiza',
          picture_url: 'https://res.cloudinary.com/djsiviw7j/image/upload/v1707781040/zli3kiase0medarqi0my.jpg',
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://porellosezeiza.vercel.app/success",
        pending: "https://porellosezeiza.vercel.app/pending",
        failure: "https://porellosezeiza.vercel.app/failure",
      },
      notification_url: "https://pawsofhope.4.us-1.fl0.io/webhook",
      auto_return: "approved",
      statement_descriptor: "Por Ellos Ezeiza",
      external_reference: "Donacion a PorEllosEzeiza",
    };
    const preference = new Preference(client);
    const result = await preference.create({body});

    res.json({
      url:result.init_point
    })
  } catch (error) {
    console.log(error)
    res.status(501).json({
      message: "Error al crear la preferencia en el backend",
    });
  }
};

export const receiveWebhook = (req, res) => {
  console.log(req.query);
  res.send("webhook received");
};
