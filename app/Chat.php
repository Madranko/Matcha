<?php
namespace App;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface {
	protected $clients;
	protected $users;

	public function __construct() {
		$this->clients = new \SplObjectStorage;
		$this->users = [];
	}

	public function onOpen(ConnectionInterface $conn) {
		// Store the new connection to send messages to later
		$this->clients->attach($conn);
		echo "New connection! ({$conn->resourceId})\n";
	}

	public function onMessage(ConnectionInterface $from, $msg) {
		$numRecv = count($this->clients) - 1;
		echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n", $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');
		////////////////////////////////////////////////
		$recievedData = json_decode($msg);
		$this->users[$recievedData->from_id] = $from;
		if ($recievedData->to && array_key_exists($recievedData->to, $this->users)) {
			$this->users[$recievedData->to]->send($msg);
		}
		// $from->send($msg);
		////////////////////////////////////////////////
		// foreach ($this->clients as $client) {
		// 	$client->send($msg);
		// }
	}

	public function onClose(ConnectionInterface $conn) {
		// The connection is closed, remove it, as we can no longer send it messages
		$this->clients->detach($conn);

		echo "Connection {$conn->resourceId} has disconnected\n";
	}

	public function onError(ConnectionInterface $conn, \Exception $e) {
		echo "An error has occurred: {$e->getMessage()}\n";

		$conn->close();
	}
}
?>
