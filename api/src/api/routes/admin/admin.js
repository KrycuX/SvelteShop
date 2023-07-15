import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/admin/hello", (req, res) => {
    res.json({
      message: "Welcome to Your Store!",
    })
  })

  return router
}