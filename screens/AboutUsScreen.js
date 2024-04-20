import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo à Your Health!</Text>
      <Text style={styles.paragraph}>
        Somos uma equipe dedicada a fornecer soluções inovadoras e acessíveis para cuidados com a saúde. Nosso objetivo é capacitar as pessoas a tomarem controle de sua saúde e bem-estar, fornecendo ferramentas e recursos que as ajudem a gerenciar sua saúde de forma eficaz.
      </Text>
      <Text style={styles.subtitle}>Nossa Missão</Text>
      <Text style={styles.paragraph}>
        Nossa missão é tornar o cuidado com a saúde mais acessível, conveniente e personalizado para todos. Acreditamos que todos merecem acesso a cuidados de saúde de qualidade, independentemente de sua localização, condição financeira ou histórico médico.
      </Text>
      <Text style={styles.subtitle}>O Que Fazemos</Text>
      <Text style={styles.paragraph}>
        Oferecemos uma variedade de recursos e serviços para ajudar nossos usuários a cuidarem melhor de sua saúde:
        - Histórico Médico: Permitimos que os usuários armazenem e gerenciem seu histórico médico de forma segura e conveniente.
        - Agendamento de Consultas: Facilitamos o agendamento de consultas médicas com profissionais qualificados, tornando o processo rápido e fácil.
        - Informações de Saúde: Fornecemos conteúdo educativo e informativo sobre uma variedade de tópicos relacionados à saúde, para ajudar nossos usuários a tomarem decisões informadas sobre sua saúde.
      </Text>
      <Text style={styles.subtitle}>Nossa Equipe</Text>
      <Text style={styles.paragraph}>
        Nossa equipe é composta por profissionais apaixonados e dedicados que têm o compromisso de fazer a diferença na vida das pessoas. Estamos constantemente trabalhando para melhorar nossos serviços e desenvolver novas maneiras de ajudar nossos usuários a viverem vidas mais saudáveis e felizes.
      </Text>
      <Text style={styles.subtitle}>Entre em Contato</Text>
      <Text style={styles.paragraph}>
        Estamos sempre abertos a feedback, perguntas e sugestões dos nossos usuários. Se você tiver alguma dúvida ou comentário, não hesite em entrar em contato conosco. Estamos aqui para ajudar!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004AAD',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default AboutUs;
