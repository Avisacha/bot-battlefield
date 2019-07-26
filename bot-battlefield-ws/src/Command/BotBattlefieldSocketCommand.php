<?php

namespace App\Command;

use App\Controller\SocketController\MainSocketController;
use Ratchet\App;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

final class BotBattlefieldSocketCommand extends ContainerAwareCommand
{
    protected static $defaultName = 'bot-battlefield:socket';

    private $mainSocketController;

    public function __construct(MainSocketController $mainSocketController)
    {
        parent::__construct();
        $this->mainSocketController = $mainSocketController;
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

        $this->mainSocketController->setContainer($this->getContainer());

        if ($state) {
            if ($state === "start") {
                $io->success('BotBattlefield Server Socket is running');
                $app = new App('localhost', 8080);
                $app->route('/players', $this->mainSocketController, ['*']);
                $app->run();
            } elseif ($state === "stop") {
                $io->success('BotBattlefield Server Socket  is stopped');
            }
        }
    }
}
