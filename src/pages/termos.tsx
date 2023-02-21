import { Header } from "@/components/Header";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import  Head  from "next/head";

export default function termos () {
    return(
        <Flex  ml="auto" mr="auto" maxW={900} display="flex" alignItems="center" justifyContent="center" mt="20" flexDirection="column">
        <Head>
        
        <title>Ola</title>
        </Head>       
            
            <Box mb="12">
            <Heading fontSize="x-large"  textTransform="uppercase">Termos de privacidade</Heading>
            </Box>
            <Text textAlign="center">POLÍTICA DE PRIVACIDADE

Última atualização: [inserir data da última atualização]

Nossa empresa se preocupa com a privacidade e proteção dos dados pessoais de nossos usuários e clientes. Por isso, esta política de privacidade estabelece como coletamos, utilizamos, compartilhamos e protegemos as informações que recebemos.

Informações coletadas
Podemos coletar as seguintes informações pessoais dos usuários e clientes do nosso site:

Nome completo
Endereço de e-mail
Endereço físico
Informações de pagamento
Informações sobre o dispositivo e navegador utilizados para acessar o site
Informações sobre a localização geográfica do usuário
Como usamos as informações coletadas
As informações coletadas são utilizadas para:

Processar e completar as transações solicitadas pelos usuários e clientes
Enviar informações sobre a empresa, seus produtos e serviços
Personalizar o conteúdo e publicidade apresentados no site
Melhorar a experiência de navegação do usuário no site
Compartilhamento de informações
As informações coletadas não são compartilhadas com terceiros, exceto nos casos em que:

Seja necessário para o processamento de transações solicitadas pelo usuário ou cliente (por exemplo, com empresas de cartão de crédito para processar pagamentos)
Seja necessário para cumprir obrigações legais ou regulatórias
Seja necessário para proteger os direitos, propriedade ou segurança da empresa, seus usuários ou terceiros
Cookies e outras tecnologias
Nosso site pode utilizar cookies e outras tecnologias para coletar informações sobre a navegação do usuário. Essas informações podem ser utilizadas para personalizar o conteúdo e publicidade apresentados no site, bem como para melhorar a experiência de navegação do usuário. Ao utilizar o site, o usuário concorda com o uso de cookies e outras tecnologias.

Segurança das informações
Adotamos medidas de segurança para proteger as informações coletadas contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, não podemos garantir a segurança absoluta das informações coletadas.

Alterações na política de privacidade
Podemos atualizar esta política de privacidade periodicamente. As alterações serão publicadas no site e a data da última atualização será atualizada.

Contato
Em caso de dúvidas ou sugestões sobre esta política de privacidade, entre em contato conosco pelo e-mail [inserir e-mail de contato].

Lembre-se de adaptar o texto às necessidades do seu negócio e verificar se está em conformidade com as leis e regulamentos aplicáveis à sua região. Além disso, é sempre recomendado consultar um advogado especializado em direito digital para garantir que sua política de privacidade esteja adequada.</Text>
        </Flex>
    )
}