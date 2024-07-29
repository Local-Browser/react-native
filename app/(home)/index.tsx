import { View, StyleSheet, Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { HelloWave } from '@/components/HelloWave';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Your need to create a profile.</ThemedText>
        <ThemedText>

        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button
          title="Create Profile"
          onPress={() => {
            router.navigate('create');
          }}
        />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  buttonContainer: {
    margin: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
