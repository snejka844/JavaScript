const dbPassword = 'mongodb://Dayan:Eminnnem22@clustertest-shard-00-00.tjobq.mongodb.net:27017,clustertest-shard-00-01.tjobq.mongodb.net:27017,clustertest-shard-00-02.tjobq.mongodb.net:27017/ClusterTest?ssl=true&replicaSet=atlas-h8celo-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};