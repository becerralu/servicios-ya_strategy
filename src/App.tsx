import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ChevronDown, Users, Smartphone, Database, Zap, Calendar, MapPin, CreditCard, Shield } from 'lucide-react';

const IntegrationStrategy = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const phases = [
    {
      title: "Fase 1: Fundamentos Técnicos",
      duration: "2-3 semanas",
      color: "bg-blue-500",
      icon: Database,
      tasks: [
        "Configurar Firebase como backend principal",
        "Implementar autenticación de usuarios (clientes y proveedores)",
        "Diseñar estructura de base de datos para servicios y usuarios",
        "Configurar Firestore para datos en tiempo real"
      ]
    },
    {
      title: "Fase 2: Funcionalidades Core",
      duration: "3-4 semanas", 
      color: "bg-green-500",
      icon: Smartphone,
      tasks: [
        "Sistema de búsqueda y filtrado de servicios",
        "Perfiles de proveedores con portafolio",
        "Sistema de reservas y calendario",
        "Chat en tiempo real entre usuarios"
      ]
    },
    {
      title: "Fase 3: Geolocalización y Pagos",
      duration: "2-3 semanas",
      color: "bg-purple-500", 
      icon: MapPin,
      tasks: [
        "Integrar Google Maps/Apple Maps",
        "Sistema de geolocalización para proveedores cercanos",
        "Integración con Stripe/pasarelas de pago locales",
        "Cálculo automático de tarifas por distancia"
      ]
    },
    {
      title: "Fase 4: Experiencia de Usuario",
      duration: "2 semanas",
      color: "bg-orange-500",
      icon: Users,
      tasks: [
        "Sistema de calificaciones y reseñas",
        "Notificaciones push personalizadas",
        "Historial de servicios y favoritos",
        "Soporte y chat de ayuda"
      ]
    }
  ];

  const integrationAreas = [
    {
      title: "APIs y Backend",
      icon: Database,
      items: [
        "Firebase Firestore - Base de datos en tiempo real",
        "Firebase Auth - Autenticación segura", 
        "Firebase Cloud Functions - Lógica del servidor",
        "Firebase Storage - Imágenes y documentos",
        "Google Maps API - Geolocalización",
        "Stripe API - Procesamiento de pagos"
      ]
    },
    {
      title: "Funcionalidades Móviles",
      icon: Smartphone,
      items: [
        "Push notifications con Firebase Cloud Messaging",
        "Cámara para fotos de perfil y trabajos",
        "Geolocalización en tiempo real",
        "Calendario nativo integrado",
        "Llamadas y mensajes directos",
        "Compartir en redes sociales"
      ]
    },
    {
      title: "Servicios Externos",
      icon: Zap,
      items: [
        "Pasarela de pagos (Stripe/MercadoPago)",
        "Servicio de SMS para verificación",
        "Email marketing (Mailchimp/SendGrid)",
        "Analytics (Google Analytics/Mixpanel)",
        "Crash reporting (Crashlytics)",
        "Review system integrado"
      ]
    }
  ];

  const toggleTask = (phaseIndex: number, taskIndex: number) => {
    const taskId = `${phaseIndex}-${taskIndex}`;
    const newCompleted = new Set(completedTasks);
    
    if (completedTasks.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    
    setCompletedTasks(newCompleted);
  };

  const getPhaseProgress = (phaseIndex: number) => {
    const phaseTasks = phases[phaseIndex].tasks.length;
    const completedInPhase = phases[phaseIndex].tasks.filter((_, taskIndex) => 
      completedTasks.has(`${phaseIndex}-${taskIndex}`)
    ).length;
    return Math.round((completedInPhase / phaseTasks) * 100);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Estrategia de Integración FlutterFlow
        </h1>
        <p className="text-lg text-gray-600">
          Plataforma de Servicios a Domicilio - Guía Completa
        </p>
      </div>

      {/* Fases del Proyecto */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fases de Implementación</h2>
        <div className="grid gap-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const progress = getPhaseProgress(index);
            const isActive = activePhase === index;
            
            return (
              <div key={index} className={`bg-white rounded-lg shadow-md border-l-4 ${phase.color} transition-all duration-300 ${isActive ? 'ring-2 ring-blue-400' : ''}`}>
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => setActivePhase(isActive ? -1 : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${phase.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{phase.title}</h3>
                        <p className="text-gray-600">{phase.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className={`text-sm font-medium ${progress === 100 ? 'text-green-600' : 'text-gray-600'}`}>
                          {progress}% completado
                        </div>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${phase.color}`}
                            style={{width: `${progress}%`}}
                          ></div>
                        </div>
                      </div>
                      {isActive ? <ChevronDown /> : <ChevronRight />}
                    </div>
                  </div>
                </div>
                
                {isActive && (
                  <div className="px-4 pb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-gray-800">Tareas a completar:</h4>
                      <div className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => {
                          const taskId = `${index}-${taskIndex}`;
                          const isCompleted = completedTasks.has(taskId);
                          
                          return (
                            <div 
                              key={taskIndex}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white cursor-pointer transition-colors"
                              onClick={() => toggleTask(index, taskIndex)}
                            >
                              {isCompleted ? (
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                              ) : (
                                <Circle className="text-gray-400 flex-shrink-0" size={20} />
                              )}
                              <span className={`${isCompleted ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                                {task}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Áreas de Integración */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Áreas Clave de Integración</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {integrationAreas.map((area, index) => {
            const Icon = area.icon;
            const isExpanded = expandedSection === index;
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <div 
                  className="p-4 cursor-pointer border-b border-gray-100"
                  onClick={() => setExpandedSection(isExpanded ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-indigo-500 text-white">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{area.title}</h3>
                    </div>
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-4">
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Consideraciones Especiales */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Consideraciones Especiales para Servicios a Domicilio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Shield className="mr-2 text-green-500" size={20} />
              Seguridad y Confianza
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Verificación de identidad de proveedores</li>
              <li>• Sistema de calificaciones bidireccional</li>
              <li>• Seguimiento GPS en tiempo real</li>
              <li>• Botón de emergencia integrado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Calendar className="mr-2 text-blue-500" size={20} />
              Gestión de Citas
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Calendario sincronizado con dispositivos</li>
              <li>• Confirmaciones automáticas</li>
              <li>• Recordatorios personalizables</li>
              <li>• Reagendamiento flexible</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <CreditCard className="mr-2 text-purple-500" size={20} />
              Pagos y Facturación
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Múltiples métodos de pago</li>
              <li>• Pago sin contacto</li>
              <li>• Propinas digitales</li>
              <li>• Facturación automática</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Users className="mr-2 text-orange-500" size={20} />
              Experiencia del Usuario
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Onboarding intuitivo</li>
              <li>• Búsqueda por categorías y ubicación</li>
              <li>• Comparación de precios y servicios</li>
              <li>• Historial y servicios favoritos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          💡 Haz clic en las fases y secciones para expandir la información y marca las tareas como completadas
        </p>
      </div>
    </div>
  );
};

export default IntegrationStrategy;