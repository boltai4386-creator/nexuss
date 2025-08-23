import { clients } from '../../data/clients';
import { ClientCard } from './ClientCard';

export const ClientShowcase = () => {
  const duplicatedClients = [...clients, ...clients]; // Duplicate for infinite scroll

  return (
    <section className="w-full py-16" aria-label="Our top clients showcase">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-white font-heading">
          Our Best Clients
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="clients-track">
            {duplicatedClients.map((client, index) => (
              <ClientCard
                key={`${client.handle}-${index}`}
                client={client}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};