using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace ActiveMQ.Net.IntegrationTests
{
    public class MessageRoutingStrategiesSpec : ActiveMQNetIntegrationSpec
    {
        public MessageRoutingStrategiesSpec(ITestOutputHelper output) : base(output)
        {
        }

        [Fact]
        public async Task Should_send_and_consume_message_using_AnycastRouting()
        {
            await using var connection = await CreateConnection();
            var address = nameof(Should_send_and_consume_message_using_AnycastRouting);
            await using var producer = await connection.CreateProducerAsync(address, AddressRoutingType.Anycast);
            await using var consumer = await connection.CreateConsumerAsync(address, QueueRoutingType.Anycast);

            await producer.SendAsync(new Message("foo"));
            var msg = await consumer.ReceiveAsync();

            Assert.Equal("foo", msg.GetBody<string>());
        }

        [Fact]
        public async Task Should_send_and_consume_messages_using_MulticastRouting()
        {
            await using var connection = await CreateConnection();
            var address = nameof(Should_send_and_consume_messages_using_MulticastRouting);
            await using var producer = await connection.CreateProducerAsync(address, AddressRoutingType.Multicast);
            await using var consumer1 = await connection.CreateConsumerAsync(address, QueueRoutingType.Multicast);
            await using var consumer2 = await connection.CreateConsumerAsync(address, QueueRoutingType.Multicast);

            await producer.SendAsync(new Message("foo"));
            var msg1 = await consumer1.ReceiveAsync();
            var msg2 = await consumer2.ReceiveAsync();

            Assert.Equal("foo", msg1.GetBody<string>());
            Assert.Equal("foo", msg2.GetBody<string>());
        }
    }
}