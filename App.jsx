import {useState} from 'react';
import Flex from './src/screens/flex';
import Dimesions from './src/screens/dimesions';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     padding: 60,
    //   }}>
    //   <View>
    //     <Button
    //       title="Gizle / Göster"
    //       onPress={() => setIsVisible(!isVisible)}
    //     />
    //   </View>

    //   {isVisible && <Counter />}
    // </View>

    <Dimesions />
  );
};

export default App;
