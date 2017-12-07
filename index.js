const amqp = require('amqplib')


async function main () {
	const connection = await amqp.connect('amqp://rabbitmq:rabbitmq@127.0.0.1:5672')
	const channel = await connection.createChannel()

	const q = 'hello'
	const ex = 'hello-ex'
	const key = 'anonymous.info'

	channel.assertQueue(q, { durable: false })
	// // Publish
	channel.sendToQueue(q, new Buffer('test again'))
	// // Subscribe
	// channel.consume(q, (msg) => {
	// 	console.log('received', msg.content.toString())
	// })

	// Publish
	// channel.assertExchange(ex, 'topic', { durable: false })
	// channel.publish(ex, key, new Buffer('hello test'))
	// console.log('sent key:msg', key)

	// Subscribe
	// channel.assertExchange(ex, 'topic', { durable: false })
	// const qa = await channel.assertQueue('', { exclusive: true })
	// console.log(qa)
	// channel.bindQueue(qa.queue, ex, 'anonymous.*')

	// const a = await channel.consume(qa.queue, (msg) => {
	// 	console.log('msg', msg)
	// }, { noAck: true })
	// console.log(a)
	return true
}


main()
.then(console.log)
.catch(console.error)