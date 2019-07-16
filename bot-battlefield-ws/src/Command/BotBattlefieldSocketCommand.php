<?php

namespace App\Command;

use App\Controller\SocketController\PlayersSocketController;
use Ratchet\App;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class BotBattlefieldSocketCommand extends ContainerAwareCommand
{
    protected static $defaultName = 'bot-battlefield:socket';

    private $playerSocketController;

    public function __construct(PlayersSocketController $playerSocketController)
    {
        parent::__construct();
        $this->playerSocketController = $playerSocketController;
    }

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('state', InputArgument::OPTIONAL, '[Start|Stop] Switch server socket state');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);
        $state = $input->getArgument('state');

        try {
            $this->playerSocketController->setContainer($this->getContainer());

            if ($state) {
                if ($state === "start") {
                    $io->success('BotBattlefield Server Socket is running');
                    $app = new App('localhost', 8080);
                    $app->route('/players', $this->playerSocketController, ['*']);
                    $app->run();
                    return;
                } elseif ($state === "stop") {
                    return $io->success('BotBattlefield Server Socket  is stopped');
                }
            }
        } catch (\Throwable $e) {
            $io->error($e->getTraceAsString());
        }
    }
}
