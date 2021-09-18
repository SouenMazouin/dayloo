# DAYLOO 

## Erreurs connus  

**Mathview :**  
Erreur après un npm install:
``` requireNativeComponent: "RNMathView" was not found in the UIManager. ```  

Il suffit de lier le package :  

``` npx react-native link react-native-math-view ```