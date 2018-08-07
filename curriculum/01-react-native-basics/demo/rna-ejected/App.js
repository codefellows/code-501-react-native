import React from 'react';
import { View, StyleSheet, TouchableHighlight, Modal, Text, Button, FlatList } from 'react-native';
import Contacts from 'react-native-unified-contacts';
import iCal from './native/calendar/';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen:false,
      contacts:[]
    };
  }

  addEvent = () => {
    iCal.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }

  setModalVisible = modalOpen => {
    this.setState({modalOpen})
  }
  showContacts = () => {
    Contacts.getContacts( (error, contactList) =>  {
      if (error) {
        console.error(error);
      }
      else {
        let contacts = contactList.reduce( (list, contact, i) => {
          let record = {key:contact.fullName, fullName:contact.fullName};
          list.push(record);
          return list;
        },[]);

        this.setState({contacts});
        this.setModalVisible(true);

      }
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          onPress={this.addEvent}
          title="Add Event"
          accessibilityLabel="Add an event to the calendar"
        />

        <Button
          onPress={this.showContacts}
          title="Show Contacts"
          accessibilityLabel="Show a list of contacts"
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalOpen}
        >
          <FlatList
            data={this.state.contacts}
            renderItem={({item}) => <Text>{item.fullName}</Text>}
          />

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(false);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
