import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import {
    Camera,
    useCameraDevices,
    useCameraPermission,
    type CameraPosition,
    type VideoFile,
    useFrameProcessor,
    useCameraDevice,
} from 'react-native-vision-camera';



function CameraComponent() {
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('front')


    const cameraRef = useRef<Camera | null>(null);

    const [faces, setFaces] = useState(null)

    useEffect(() => {
        (async () => {
            await requestPermission();
        })();
    }, [requestPermission]);


    if (!hasPermission) {
        // Camera permissions are still loading
        return (
            <View style={styles.container}>
                <ActivityIndicator color="#162D4C" />
            </View>
        );
    }

    if (device == null) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>No camera device found</Text>
            </View>
        );
    }

    return (
        <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CameraComponent;
