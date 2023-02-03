//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  const memoizedFunc = (...args) => {
    const hash = md5(args.join(''));

    const foundCash = cache.find(cacheItem => cacheItem.hash === hash);

    if (foundCash) {
      return `Из кэша: ${foundCash.value}`
    }

    const result = func(...args);
    if (cache.length >= 5) {
      cache.shift();
    }

    cache.push({ hash, value: result})

    return `Вычисляем: ${result}`
  }

  return memoizedFunc;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  const decoratedFunction = (...args) => {
    decoratedFunction.allCount++;
    if (!timeoutId) {
      func(...args);
      decoratedFunction.count++;
    }
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      decoratedFunction.count++;
    }, delay);
  }

  decoratedFunction.count = 0;
  decoratedFunction.allCount = 0;

  return decoratedFunction
}