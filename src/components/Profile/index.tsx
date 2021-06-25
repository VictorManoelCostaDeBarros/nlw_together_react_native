import React, { useState } from "react";
import { View, Text, Alert, Modal, Button } from "react-native";
import { RectButton } from 'react-native-gesture-handler'
import { useAuth } from "../../hooks/auth";

import { Avatar } from '../Avatar'
import { styles } from "./styles";

export function Profile() {
  const [openModal, setOpenModal] = useState(false)

  const { user, signOut } = useAuth()

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair?', 
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut()
      }
    ])
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={() => setOpenModal(true)}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal} 
        
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Deseja sair do App</Text>
          <View style={styles.buttons}>
            <Button title="SIM" onPress={() => signOut()}/> 
            <Button title="NÂO" onPress={() => setOpenModal(false)}/>
          </View>
        </View>
        
          
      </Modal>

    </View>
  )
}