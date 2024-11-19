export const Routes = {
  Home: '/',
  SignIn: '/signin',
  SignOut: '/signin',

  ForgotPassword: '/forgot-password',
  ResetPassword: '/forgot-password/reset',
  VerifyPassword: '/forgot-password/verify',

  AccountSettings: '/account',
  Orders: '/account/your-orders',
  Wishlist: '/account/wishlist',
  LoginAndSecurity: '/account/security',
  AccountAddresses: '/account/addresses',
  AccountPaymentMethods: '/account/payment-methods',

  Cart: '/cart',
  Checkout: '/cart/checkout',
  Payment: '/cart/checkout/payment',
  PaymentFailure: '/cart/checkout/payment/failure',
  PaymentSuccess: '/cart/checkout/payment/success',

  BestSellers: '/category/best-sellers',
  TheChristianWay: '/category/the-christian-way',
  GodLovesYou: '/category/god-loves-you',
  GodSexAndYou: '/category/god-sex-and-you',
  ToOvercame: '/category/to-overcame',
  FromHisLips: '/category/from-his-lips',
  SpecialOffers: '/category/special-offers',
  AllCategories: '/category',

  Search: '/search',
}

export const PublicRoutes = [
  Routes.Home,
  Routes.SignIn,
  Routes.SignOut,
  Routes.ForgotPassword,
  Routes.ResetPassword,
  Routes.VerifyPassword,
  Routes.Cart,
  Routes.Checkout,
  Routes.AllCategories,
  Routes.Search,
]

export const ProtectedSubRoutes = [
  Routes.Payment,
  Routes.PaymentFailure,
  Routes.PaymentSuccess,
]
