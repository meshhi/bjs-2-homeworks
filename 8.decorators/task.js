//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  const memoizedFunc = (...args) => {
    const hash = md5(args.join(''));

    for (let record of cache) {
      if (record.hash === hash) {
        return `Из кэша: ${record.value}`
      }
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
  let isThrottled = false;

  const decoratedFunction = (...args) => {
    decoratedFunction.allCount++;
    if (isThrottled) {
      setTimeout(() => func(...args), delay);
      return;
    }

    func(...args);
    decoratedFunction.count++;

    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      
    }, delay);
  }

  decoratedFunction.allCount = 0;
  decoratedFunction.count = 0;


  return decoratedFunction
}