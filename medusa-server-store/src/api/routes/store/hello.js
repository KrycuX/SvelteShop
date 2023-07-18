import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-product", async (req, res) => {

    res.json({
      message: `Welcome to s!`
    })
  })

  return router;
}