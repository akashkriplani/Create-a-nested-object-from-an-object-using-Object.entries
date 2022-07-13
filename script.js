const obj = {
  "pizza": "that",
  "this.other": "that",
  "alphabets": [1, 2, 3, 4],
  "this.thing.that": "this",
  "a.b.c.d": 12,
  "a.b.d": 10
};

const
  nestObject = (obj, [key, val]) => {
    const
      keys = key.split('.'),
      lastKey = keys.pop();
    keys.reduce((o, k) => o[k] ??= {}, obj)[lastKey] = val;
    return obj;
  },
  entries = Object.entries(obj),
  result = entries.reduce(nestObject, {});

console.log(result);
