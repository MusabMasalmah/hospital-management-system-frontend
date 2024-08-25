import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('authToken');

  if (req.url.includes('/register') || req.url.includes('/login')) {
    return next(req);
  }

  if (authToken) {
    // Clone the request and add the authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    // Send the cloned request with the token
    return next(authReq);
  }

  // If no token, pass the original request
  return next(req);
};
