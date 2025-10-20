import React from 'react';
import {CustemView} from '../../components/ui/CustemView';
import {Card} from '../../components/ui/Card';
import {Button} from '../../components/ui/Button';

export const SwitchScreen = () => {
  return (
    <CustemView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <Button text="click" onPress={() => {}}></Button>
      </Card>
    </CustemView>
  );
};
