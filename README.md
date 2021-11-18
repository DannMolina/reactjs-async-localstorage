Asynchronous usage for Window.localStorage.

## Get Started
- npm install reactjs-async-localstorage
- import { AsyncStorage } 'reactjs-async-localstorage'

## Usage
**Save to localstorage**
- AsyncStorage.setItem()

**Retrieve data from the localstorage**
- AsyncStorage.getItem()

**Remove specific data from the localstorage**
- AsyncStorage.removeItem()

**Multi-remove data**
- AsyncStorage.multiRemove()


**Multi-get Data from the localstorage**
- AsyncStorage.multiGet()


## Implementation Example
```javascript
import React from 'react';
import {Text, View} from 'react-native';
import { AsyncStorage } 'reactjs-async-localstorage';

const App = () => {
  const [sampleData, setSampleData] = useState(
    'Nothing is saved to local storage!',
  );

  const saveData = async () => {
    await useStorage.setItem('sample_data_in_local_storage', 'Sample Data');
  };

  const retrieveData = async () => {
    const localData = await useStorage.getItem('sample_data_in_local_storage');
    setTimeout(() => {
      setSampleData(localData);
    }, 2000);
  };

  useEffect(() => {
    // * save
    saveData();

    // * retrieved
    retrieveData();
  }, []);

  return (
    <View>
      <Text>{sampleData}</Text>
    </View>
  );
};

export default App;
