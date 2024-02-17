---
description: ARC-NetWork Server Netzwerk
---

# ARC-Network

Test

## Altes Handbuch

```
Titel: ARC-NetWork - Handbuch
Untertitel: Ein Handbuch über die wichtigsten Befehle (aktualisiert: 16.02.2021)
```

### Netzwerk

#### Server wechseln

Das Netzwerk besteht aus verschiedenen Servern.

Mithilfe des Befehls /server lassen sich die verschiedenen Server anzeigen.

Mithilfe des Befehls /server &ltServername&gt kann man dann auf einen entsprechenden Server wechseln, sofern man die Berechtigung dazu hat.

#### Kommunikation

##### Chat-Kanäle

Das Netzwerk besitzt mehrere teils voneinander getrennte Chat-Kanäle.
Mithilfe des Befehls /global schaltet man auf den globalen Kanal um. Die Nachrichten dort sind auf jedem Server des Netzwerks sichtbar.
Mithilfe des Befehls /local schaltet man auf den lokalen/Server Kanal um. Die Nachrichten dort sind nur auf dem aktuellen Server sichtbar. Damit Minigames- oder ander Serverplugin-Chatfunktionen funktionieren können, muss dieser Kanal aktiv sein.
Mithilfe des Befehls /helpop &ltNachricht&gt sendet man eine Nachricht an alle Admins auf dem Server (sofern Online), um Hilfe/Unterstützung zu erhalten.

####Private Kommunikation

Mithilfe des Befehls /msg &ltEmpfänger&gt &ltNachricht&gt können Nachrichten an andere Spieler auf dem gesamten Netzwerk verschickt werden, sofern diese Online sind.
Hat man eine Nachricht erhalten, so kann man mit /r &ltNachricht&gt direkt auf diese Antworten.

#### Offline-Kommunikation

Um mit Spielern zu kommunizieren, die gerade nicht auf dem Netzwerk sind, bietet sich das Mail-System an.
Mithilfe des Befehls /mail send &ltEmpfänger&gt &ltNachricht&gt kann eine solche Offline-Nachricht versendet werden. Der Empfänger erhält beim nächsten Login dann eine Benachrichtigung über eure Nachricht.
Mithilfe des Befehls /mail sendall &ltNachricht&gt kann man eine Mail an alle Spieler senden. (ggf. nur von Admins nutzbar)
Mithilfe des Befehls /mail list kann man sich neue Mails anzeigen lassen.
Möchte man neue und alte Mails sehen, so nutzt man den Befehl /mail listall.
Zum Löschen einer bestimmten Nachricht, nutzt man den Befehl /mail del &ltID&gt.
Zum Löschen von gelesenen Nachrichten nutzt man den Befehl /mail del read.
Zum Löschen aller Nachrichten nutzt man den Befehl /mail del all.
