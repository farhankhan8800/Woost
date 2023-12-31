import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform, StyleSheet} from 'react-native';

const KeybaordAvoidingWrapper = ({children}) => { 

    return (
        <KeyboardAvoidingView style = {{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
               <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex: 1}} bounces={false}> 
               <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                    {children}
                </TouchableWithoutFeedback>

               </ScrollView>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-around',
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36,
    },
    btnContainer: {
      backgroundColor: 'white',
      marginTop: 12,
    },
  });

export default KeybaordAvoidingWrapper;
