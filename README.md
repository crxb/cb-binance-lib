# Description
Promise based Typescript Binance client for nodejs/javascript. Not all endpoints and socket subscriptions are implemented yet. Do not use in production yet.

# Examples

##### Subscribe to user data stream
```javascript
import {Binance} from 'cb-binance-lib';

let client = new Binance('API_KEY', 'API_SECRET');

client.userDataStream.subscribe((data) => {
    console.log(data);
});
```

##### Create new order
```javascript
import {Binance} from 'cb-binance-lib';

let client = new Binance('API_KEY', 'API_SECRET');

let orderResult = await client.order.create({
    symbol: 'ETHUSDT',
    side: 'BUY',
    quantity: '0.001',
    type: 'LIMIT',
    price: '1600',
    timeInForce: 'GTC',
    newClientOrderId: 'cb-test',
});
```

##### Query Open Orders
```javascript
import {Binance} from 'cb-binance-lib';

let client = new Binance('API_KEY', 'API_SECRET');

let openOrders = await client.order.queryOpens();
```

##### Cancel Order
```javascript
import {Binance} from 'cb-binance-lib';

let client = new Binance('API_KEY', 'API_SECRET');

let cancelResult = await client.order.cancel({
    symbol: 'ETHUSDT',
    origClientOrderId: 'cb-test',
});
```

# TODO
* Websocket reconnection mechanism should be implemented.
* Client should be seperated by Futures/Spot operations.
* Error handling (throwing errors) should be improved.
* Documentation needs to be improved.
* First release will be published after this items are done. 
