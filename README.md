# reto_tecnico_cullqui
Diagrama 

[![Screenshot-2023-03-21-at-03-34-42.png](https://i.postimg.cc/BnxnHyq8/Screenshot-2023-03-21-at-03-34-42.png)](https://postimg.cc/mPg4Gm1R)

Instalar dependencias

- cd api-game-lcr && npm install
- cd lambda-lcr && npm install

Puede iniciar la demostración de la siguiente manera:

- Iniciar api-game-lcr: cd api-game-lcr && npm run start:dev

¡Finalmente solo envíe una solicitud!

- POST http://localhost:3000/send-transaction
- Body : {
              "accountExternalIdDebit": "781002e2-a0ec-40f9-992e-a4a6107fe6cd",
              "accountExternalIdCredit": "781002e2-a0ec-40f9-992e-a4a6107fe6cd",
              "tranferTypeId": 1,
              "value": 850
          }


