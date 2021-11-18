/**
 * Asynchronous local storage
 */

const AsyncStorage = {
  // *
  setItem: async (key, value, fn = null) => {
    try {
      // *
      if (typeof fn !== "function") {
        fn = () => {};
      }

      // *
      return await localStorage.setItem(key, value);
    } catch (e) {
      console.log({ "`Storage Util Error\nSet Item`": e });
    }
  },
  // *
  getItem: async (key) => {
    try {
      return await localStorage.getItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error\nGet Item:`": e });
    }
  },
  // *
  removeItem: async (key) => {
    try {
      return await localStorage.removeItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error.\nRemove Item:`": e });
    }
  },
  // *
  multiRemove: async (keys = []) => {
    try {
      return await localStorage.multiRemove(keys);
    } catch (e) {
      console.log({ "`Storage Util Error.\nMulti Remove Item:`": e });
    }
  },
  // *
  multiGet: async (keys = []) => {
    try {
      return await localStorage.multiGet(keys);
    } catch (e) {
      console.log({ "`Storage Util Error.Multi Get Item:`": e });
    }
  },
};

export { AsyncStorage };
