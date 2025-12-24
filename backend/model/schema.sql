
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(20) UNIQUE NOT NULL,
  role ENUM('SUPER_ADMIN', 'HR', 'EMPLOYEE', 'CLIENT') NOT NULL,
  password VARCHAR(255),
  is_activated BOOLEAN DEFAULT FALSE,
  created_by INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT fk_created_by
    FOREIGN KEY (created_by)
    REFERENCES users(id)
    ON DELETE SET NULL
);


INSERT INTO users (user_id, role, is_activated)
VALUES ('ADMIN001', 'SUPER_ADMIN', 0);
