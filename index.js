/**
 * Asynchronous local storage
 */

// *
const AsyncStorage = {
  /**
   * @param {key} key
   * @param {value} value
   * @save accesses the current domain's local Storage object and adds a data item
   */
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

  /**
   * @param {key} key
   * @returns reading the localStorage item
   */
  getItem: async (key, fn = null) => {
    try {
      return await localStorage.getItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error\nGet Item:`": e });
    }
  },

  /**
   * @param {key} key
   * @remove localstorage item
   */
  removeItem: async (key, fn = null) => {
    try {
      return await localStorage.removeItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error.\nRemove Item:`": e });
    }
  },

  /**
   * @remove all the localStorage items
   */
  clear: async () => {
    try {
      return await localStorage.clear();
    } catch (e) {
      console.log({ "`Storage Util Error.\nRemove Item:`": e });
    }
  },
};

export { AsyncStorage };
