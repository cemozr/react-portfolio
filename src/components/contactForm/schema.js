import { z } from "zod";

export const mailSchema = z.object({
  name: z.string().min(2, { message: "İsim en az iki karakter içermelidir." }),
  email: z.string().email({ message: "Geçerli bir mail adresi giriniz." }),
  message: z.string().min(1, { message: "Lütfen mesajınızı giriniz." }),
});
