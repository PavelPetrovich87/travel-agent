import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import Grid from '@/components/Grid';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type LinkDefinition = {
  title: string;
  icon: string;
  href: string;
  description: string;
};

const LINKS: LinkDefinition[] = [
  {
    title: 'Travel Planning',
    icon: 'airplane',
    href: '/(screens)/trip-form',
    description: 'Plan your next trip with our travel agent',
  },
  {
    title: 'Documentation',
    icon: 'doc.text',
    href: 'https://docs.expo.dev',
    description: 'Visit Expo docs to learn more about the framework',
  },
  {
    title: 'Expo Router',
    icon: 'arrow.triangle.turn.up.right.diamond',
    href: 'https://expo.github.io/router/docs',
    description: 'The file-based router for Universal React Native apps',
  },
  {
    title: 'GitHub Repo',
    icon: 'chevron.left.forwardslash.chevron.right',
    href: 'https://github.com/expo/expo',
    description: 'View the Expo source code on GitHub',
  },
];

export default function ExploreScreen() {
  return (
    <ThemedView edges={['bottom']} style={styles.container}>
      <ThemedText type="title">Explore</ThemedText>
      <ThemedText style={styles.description}>
        Discover features and resources to help you build your app.
      </ThemedText>

      <Grid
        items={LINKS}
        numColumns={2}
        renderItem={({ item, width }) => (
          <Link href={item.href} asChild>
            <ThemedView
              style={[
                styles.itemContainer,
                {
                  width,
                },
              ]}>
              <View style={styles.iconContainer}>
                <IconSymbol size={24} name={item.icon} color="#fff" />
              </View>
              <ThemedText type="subtitle">{item.title}</ThemedText>
              <ThemedText style={styles.itemDescription}>{item.description}</ThemedText>
            </ThemedView>
          </Link>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  description: {
    marginVertical: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4BDCB0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  itemContainer: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  itemDescription: {
    marginTop: 8,
    fontSize: 14,
  },
});
