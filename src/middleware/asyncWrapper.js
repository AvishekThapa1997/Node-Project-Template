const asyncWrapper = (operation) => {
  return async (_req, _res, next) => {
    try {
      await operation();
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
};
