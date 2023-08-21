import React, { useState } from 'react';

// Native Base Components
import {
  useTheme,
  Pressable,
  Box,
  Text,
  Badge,
  HStack,
  ScrollView,
  Spacer,
  Button,
} from 'native-base';

// Icons
import { InfoCircle, ChevronRight } from '@cd-next-gen-app/icons';

// Supplementary Lines Mock Data
const supLines = [
  {
    id: '1',
    principleNo: '019-6650001',
    tag: 'Active',
  },
  {
    id: '2',
    principleNo: '019-6650002',
    tag: 'Active',
  },
  {
    id: '3',
    principleNo: '019-6650003',
    tag: 'Active',
  },
  {
    id: '4',
    principleNo: '019-6650004',
    tag: 'Suspended',
  },
  {
    id: '5',
    principleNo: '019-6650005',
    tag: 'Active',
  },
  {
    id: '6',
    principleNo: '019-6650006',
    tag: 'Line Barred',
  },
];

const SupplementaryLines = ({ navigation }: { navigation: any }) => {
  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px" flex={1}>
          {/* Supplementary Lines Card*/}
          <Box variant="shadow">
            {supLines.map((item, index) => (
              <Pressable>
                <Box
                  key={index}
                  variant="listing"
                  pt="0px"
                  borderBottomWidth={index === supLines.length - 1 ? 0 : 1}
                >
                  <HStack alignItems="center">
                    <Box flexDirection="row" alignItems="center">
                      <Text variant="body" pr={2}>
                        {item.principleNo}
                      </Text>
                      {item.tag ? (
                        <Badge variant="success">{item.tag}</Badge>
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
export default SupplementaryLines;
