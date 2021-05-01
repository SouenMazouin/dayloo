# DAYLOO

**TODO** 

Faire de ce README un README propre (huhuhu) et trier ce qui aurait plutôt sa place dans la doc confluence.  

## BUGS CONNUS  

**Mathview :**  

La lib MathView peut s'averer délicate à manipuler, surtout à l'installation. J'ai rencontré des erreurs de compilation pour une raison encore inconnue pour l'heure, la seule solution que j'ai pu trouver pour y pallier a été de rollback à un commit antérieur. **Il faudra garder ça à l'oeil donc**.  

Une autre erreur peut pointer le bout de son nez, après installation cette fois :  

``` requireNativeComponent: "RNMathView" was not found in the UIManager. ```  

Dans ce cas si il aura suffit de lier le package (il me semblais que cette version de React faisait la liaison automatiquement, mais bref):  

``` npx react-native link react-native-math-view ```