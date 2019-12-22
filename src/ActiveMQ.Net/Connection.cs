﻿using System;
using System.Threading.Tasks;
using Amqp;

namespace ActiveMQ.Net {
    
    
    internal class Connection : IConnection
    {
        private readonly Amqp.IConnection _connection;
        private readonly Session _session;

        public Connection(Amqp.IConnection connection, Session session)
        {
            _connection = connection;
            _session = session;
        }

        public IConsumer CreateConsumer(string address, RoutingType routingType)
        {
            var receiverLink = new ReceiverLink(_session, Guid.NewGuid().ToString(), address);
            return new Consumer(receiverLink);
        }

        public IConsumer CreateConsumer(string address, RoutingType routingType, ConsumerConfig config)
        {
            throw new NotImplementedException();
        }

        public IProducer CreateProducer(string address, RoutingType routingType)
        {
            var senderLink = new SenderLink(_session, Guid.NewGuid().ToString(), address);
            return new Producer(senderLink);
        }

        public Task CloseAsync()
        {
            return _connection.CloseAsync();
        }

        public async ValueTask DisposeAsync()
        {
            await _connection.CloseAsync().ConfigureAwait(false);
        }
    }
}