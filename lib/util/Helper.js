function skipZero(req, fun) {
  if (req == 0 || req == "any") return true
  fun(req)
}