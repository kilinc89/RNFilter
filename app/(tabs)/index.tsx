import { Image, StyleSheet, Platform } from 'react-native';
import { ExpoRadialChartView } from '../../modules/expo-radial-chart';
import CameraComponent from '@/components/Camera';

export default function HomeScreen() {
  return (

    // <ExpoRadialChartView
    //   style={styles.container}
    //   data={[
    //     {
    //       color: '#ff0000',
    //       percentage: 0.5,
    //     },
    //     {
    //       color: '#00ff00',
    //       percentage: 0.2,
    //     },
    //     {
    //       color: '#0000ff',
    //       percentage: 0.3,
    //     },
    //   ]}
    // />

    <CameraComponent></CameraComponent>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: Platform.select({ web: 'transparent', default: 'white' }),
  },
});
