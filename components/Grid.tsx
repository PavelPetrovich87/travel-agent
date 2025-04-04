import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

type GridProps<T> = {
  items: T[];
  numColumns: number;
  renderItem: ({ item, width }: { item: T; width: number }) => React.ReactNode;
  gap?: number;
};

export default function Grid<T>({ items, numColumns, renderItem, gap = 10 }: GridProps<T>) {
  const { width: windowWidth } = useWindowDimensions();
  const contentWidth = windowWidth - 32; // Accounting for container padding
  const itemWidth = (contentWidth - (numColumns - 1) * gap) / numColumns;

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { gap }]}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem({ item, width: itemWidth })}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}); 