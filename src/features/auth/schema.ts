import * as z from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters."),
})

//// em biet la phải export type ở đây qua kia mới xài được nhưng mà k nhớ export sao....
