import React, { useState } from 'react';

// Native Base Components
import { Box, Text } from 'native-base';

const BillDetail = ({ navigation }: { navigation: any }) => {
  return (
    <Box flex={1} bg="white" justifyContent="center" alignItems="center">
      {' '}
      <Text variant="body1" bold>
        View Monthly PDF Statement
      </Text>
    </Box>
  );
};
export default BillDetail;
