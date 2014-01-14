#include <Dhcp.h>
#include <Dns.h>
#include <SPI.h>
#include <EthernetServer.h>
#include <Ethernet.h>
#include <EthernetClient.h>

#include <EthernetUdp.h>
#include <util.h>

#include <IRremote.h>
//IRsend irsend;


//Configurações do Ethernet Shield
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

byte gateway[] = { 192,168,0,1 }; // ip do roteador

byte ip[] = { 192,168,0,20 }; // ip que o arduino assumirá

byte subnet[] = { 255, 255, 0, 0 };

EthernetServer server(8081);//cria servidor porta 8081

char luz[7] = "0000L#";
char msg[7]="0000L#";

char var = '0';
void setup()
{
  Serial.begin(9600);
  
  Ethernet.begin(mac,ip,gateway,subnet);
  server.begin();
  
  pinMode(2, INPUT);
  pinMode(10, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(6,OUTPUT);
  pinMode(7,OUTPUT);
  pinMode(8,OUTPUT);
  pinMode(9,OUTPUT);

}

void loop()
{

  EthernetClient client = server.available();
  if(client){
    
    msg[1]=msg[2]; msg[2]=msg[3]; msg[3]=msg[4]; msg[4]=msg[5];msg[5]=msg[6];
    msg[6] = client.read();
    
    if(msg[6]=='#'){
      switch(msg[5]){
        case 'R':
          client.write(luz);
          break;
        case 'P':
          digitalWrite(6,HIGH);
          delay(500);
          break;
        case 'G':
          digitalWrite(7,HIGH);
          delay(500);
          break;
         case 'L':
            luz[0]=msg[1];
            luz[1]=msg[2];
            if (luz[0]=='1') digitalWrite(6,HIGH); else
            digitalWrite(7,LOW);
            if (luz[1]=='1') digitalWrite(7,HIGH); else
            digitalWrite(7,LOW);
            break;
      }
    }
  }
  }
     
    /* if(var == 'a'  ){
             
    for (int i = 0; i < 3; i++) {
      irsend.sendSony(0xa90, 12); // Sony TV power code
      delay(40);
    }*/
