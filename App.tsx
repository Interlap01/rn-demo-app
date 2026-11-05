import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const backgroundColor = isDarkMode ? '#1a1a2e' : '#f8f9fa';
  const textColor = isDarkMode ? '#ffffff' : '#1a1a2e';
  const cardColor = isDarkMode ? '#16213e' : '#ffffff';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.container, {backgroundColor}]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.title, {color: textColor}]}>RnDemo</Text>
          <Text style={[styles.subtitle, {color: textColor}]}>
            iOS Builder Test App
          </Text>

          {/* Counter Section */}
          <View style={[styles.card, {backgroundColor: cardColor}]}>
            <Text style={[styles.cardTitle, {color: textColor}]}>Counter</Text>
            <Text style={[styles.counterValue, {color: textColor}]}>
              {count}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.decrementButton]}
                onPress={() => setCount(c => c - 1)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={() => setCount(0)}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.incrementButton]}
                onPress={() => setCount(c => c + 1)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* List Section */}
          <View style={[styles.card, {backgroundColor: cardColor}]}>
            <Text style={[styles.cardTitle, {color: textColor}]}>
              Dynamic List
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={addItem}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
            {items.length === 0 ? (
              <Text style={[styles.emptyText, {color: textColor}]}>
                No items yet. Tap "Add Item" to begin.
              </Text>
            ) : (
              items.map((item, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={[styles.listItemText, {color: textColor}]}>
                    {item}
                  </Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => removeItem(index)}>
                    <Text style={styles.deleteButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>

          {/* Info Section */}
          <View style={[styles.card, {backgroundColor: cardColor}]}>
            <Text style={[styles.cardTitle, {color: textColor}]}>About</Text>
            <Text style={[styles.infoText, {color: textColor}]}>
              This demo app showcases React Native capabilities and serves as a
              test project for ios-builder - enabling iOS development from any
              platform via GitHub Actions.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.7,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#2196F3',
  },
  addButton: {
    backgroundColor: '#9C27B0',
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 8,
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    opacity: 0.5,
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
});

export default App;
