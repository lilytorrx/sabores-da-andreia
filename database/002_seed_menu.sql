-- Seed data copied from src/lib/menu.ts. Safe to execute again.

insert into menu_items (id, name, price_cents, category, image_key) values
  ('pd-peixe-camarao', 'Filé de peixe ao molho de camarão', 2800, 'daily_dish', 'pd-peixe-camarao'),
  ('pd-feijoada', 'Feijoada', 3000, 'daily_dish', 'pd-feijoada'),
  ('pd-costelinha', 'Costelinha suína assada', 2500, 'daily_dish', 'pd-costelinha'),
  ('pd-dobradinha', 'Dobradinha com feijão branco', 2500, 'daily_dish', 'pd-dobradinha'),
  ('pd-churrasquinho', 'Churrasquinho misto completo', 2000, 'daily_dish', 'pd-churrasquinho'),
  ('pd-moela', 'Moela com batata', 1700, 'daily_dish', 'pd-moela'),
  ('pd-strogonoff', 'Strogonoff de frango com batata palha ou fritas', 2000, 'daily_dish', 'pd-strogonoff'),
  ('pd-carne-assada', 'Carne assada', 2500, 'daily_dish', 'pd-carne-assada'),
  ('ac-omelete', 'Omelete simples', 1300, 'a_la_carte', 'ac-omelete'),
  ('ac-omelete-frango', 'Omelete recheada com frango', 1500, 'a_la_carte', 'ac-omelete-frango'),
  ('ac-omelete-queijo', 'Omelete recheada com queijo', 1500, 'a_la_carte', 'ac-omelete-queijo'),
  ('ac-calabresa', 'Calabresa acebolada', 1500, 'a_la_carte', 'ac-calabresa'),
  ('ac-figado', 'Isca de fígado acebolada', 1500, 'a_la_carte', 'ac-figado'),
  ('ac-frango-grelhado', 'Filé de frango grelhado', 1600, 'a_la_carte', 'ac-frango-grelhado'),
  ('ac-frango-empanado', 'Filé de frango empanado', 1800, 'a_la_carte', 'ac-frango-empanado'),
  ('ac-carre', 'Carré', 1800, 'a_la_carte', 'ac-carre'),
  ('ac-parm-frango', 'Parmegiana de frango', 2200, 'a_la_carte', 'ac-parm-frango'),
  ('ac-isca-carne', 'Isca de carne acebolada', 2400, 'a_la_carte', 'ac-isca-carne'),
  ('ac-file-peixe', 'Filé de peixe', 2400, 'a_la_carte', 'ac-file-peixe'),
  ('ac-parm-peixe', 'Parmegiana de peixe', 2800, 'a_la_carte', 'ac-parm-peixe'),
  ('ac-contra-file', 'Contra filé acebolado', 2500, 'a_la_carte', 'ac-contra-file'),
  ('ac-parm-contra-file', 'Parmegiana de contra filé', 2800, 'a_la_carte', 'ac-parm-contra-file'),
  ('b-suco', 'Suco natural (guaraná / laranja c/ acerola / uva / açaí / maracujá)', 300, 'drink', 'b-suco'),
  ('b-tita', 'Tita Cítrus', 400, 'drink', 'b-tita'),
  ('b-coca-lata', 'Coca-Cola lata', 600, 'drink', 'b-coca-lata'),
  ('b-convencao', 'Convenção 600ml', 500, 'drink', 'b-convencao'),
  ('b-coca-2l', 'Coca-Cola retornável 2L', 900, 'drink', 'b-coca-2l')
on conflict (id) do update set
  name = excluded.name, price_cents = excluded.price_cents, category = excluded.category,
  image_key = excluded.image_key;

insert into side_dishes (name) values
  ('Legumes'), ('Batatonese'), ('Salada verde'), ('Batata frita'), ('Maionese'),
  ('Salada de feijão fradinho'), ('Purê de batata')
on conflict (name) do nothing;

-- Create the first administrator. Replace the email and password before running.
-- Password hashes are generated inside PostgreSQL with pgcrypto, never in a seed file.
-- insert into admin_users (email, password_hash)
-- values ('admin@exemplo.com', crypt('troque-esta-senha', gen_salt('bf', 12)));
