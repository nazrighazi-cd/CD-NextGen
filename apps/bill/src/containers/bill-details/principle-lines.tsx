import React, { useState } from 'react';

// Native Base Components
import { Pressable, Box, Text, Badge, HStack, ScrollView } from 'native-base';

// Icons
import { ChevronRight } from '@cd-next-gen-app/icons';

// Principle Lines Mock Data
const principleLines = [
  {
    id: '1',
    principleNo: '019-9980001',
    tag: 'Active',
    variant: 'success',
  },
  {
    id: '2',
    principleNo: '019-9980002',
    tag: 'Line Barred',
    variant: 'error',
  },
  {
    id: '3',
    principleNo: '019-9980003',
    tag: 'Suspended',
    variant: 'warning',
  },
  {
    id: '4',
    principleNo: '019-9980004',
    tag: 'Active',
  },
];

const PrincipleLines = ({ navigation }: { navigation: any }) => {
  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px" flex={1}>
          {/* Principle Lines Card*/}
          <Box variant="shadow">
            {principleLines.map((item, index) => (
              <Pressable>
                <Box
                  key={index}
                  variant="listing"
                  pt="0px"
                  borderBottomWidth={
                    index === principleLines.length - 1 ? 0 : 1
                  }
                >
                  <HStack alignItems="center">
                    <Box flexDirection="row" alignItems="center">
                      <Text variant="body" pr={2}>
                        {item.principleNo}
                      </Text>
                      {item.tag ? (
                        <Badge variant={item.variant}>{item.tag}</Badge>
                      ) : null}
                    </Box>
                  </HStack>
                  <Box>
                    <ChevronRight color="#475467" />
                  </Box>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default PrincipleLines;
