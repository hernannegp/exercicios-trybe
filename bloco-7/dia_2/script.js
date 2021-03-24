const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
    },
    order: {
    pizza: {
        margherita: {
        amount: 1,
        price: 25,
        },
        pepperoni: {
        amount: 1,
        price: 20,
        }
    },
    drinks: {
        coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
        }
    },
    delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
    }
    },
    payment: {
    total: 60,
    },
};
const customerInfo = (order) => {
    const deliveryName = order.order.delivery.deliveryPerson
    const name = order.name
    const telefone = order.phoneNumber
    const rua = order.address.street
    const N = order.address.number
    const apartamento = order.address.apartment
    console.log(`Olá ${deliveryName}, entrega para ${name}, telefone: ${telefone}, ${rua}, N ${N}, AP ${apartamento}`) 
}
customerInfo(order);
const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva'
    const coquinhaGelada = order.order.drinks.coke.type
    const payment = order.payment.total = 50
    console.log(`Olá ${name}, o total do seu pedido de muzzarella, calabresa e ${coquinhaGelada} é ${payment},00$`)
}
orderModifier(order);