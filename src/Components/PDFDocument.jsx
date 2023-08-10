import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
});

// Create Document Component
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>First Name: faraz</Text>
        <Text>Last Name: dalvi</Text>
        <Text>Email: dalvifaraz</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
